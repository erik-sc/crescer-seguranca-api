package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.request.EmailRequest;
import br.com.cwi.api.security.controller.request.RedefinirSenhaRequest;
import br.com.cwi.api.security.domain.RedefinicaoSenha;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@Service
public class RedefinirSenhaService {

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private SolicitarRedefinicaoService solicitarRedefinicaoService;

    @Autowired
    private MailService mailService;

    @Autowired
    private BuscarSolicitacaoSenhaService buscarSolicitacaoSenhaService;

    @Autowired
    private ValidaExpiracaoSenhaService validaExpiracaoSenhaService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    public void solicitar(EmailRequest request) {
        String email = request.getEmail();

        Usuario usuario = buscarUsuarioService.porEmail(email);


        String token = UUID.randomUUID().toString();

        solicitarRedefinicaoService.criar(token, usuario);

        String url = String.format("http://localhost:3000/redefinir/%s", token);

        mailService.enviarMail(email, "Redefinição de senha", url);
    }

    public void redefinir(RedefinirSenhaRequest request) {
        RedefinicaoSenha redefinicaoSenha = buscarSolicitacaoSenhaService.porToken(request.getToken());

        validaExpiracaoSenhaService.validar(redefinicaoSenha);

        Usuario usuario = redefinicaoSenha.getUsuario();

        if(request.getSenhaNova().equals(request.getConfirmaSenhaNova())) {
            usuario.setSenha(passwordEncoder.encode(request.getSenhaNova()));
            solicitarRedefinicaoService.removerSolicitacaoAnterior(usuario);
            usuarioRepository.save(usuario);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Senhas diferentes");
        }
    }
}
