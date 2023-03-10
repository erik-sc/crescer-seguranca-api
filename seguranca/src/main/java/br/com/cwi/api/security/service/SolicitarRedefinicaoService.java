package br.com.cwi.api.security.service;

import br.com.cwi.api.security.domain.RedefinicaoSenha;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.repository.RedefinicaoSenhaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static java.time.LocalDateTime.now;
import static java.util.Objects.nonNull;

@Service
public class SolicitarRedefinicaoService {
    @Autowired
    private RedefinicaoSenhaRepository redefinicaoSenhaRepository;

    public void criar(String token, Usuario usuario) {
        removerSolicitacaoAnterior(usuario);
        RedefinicaoSenha entity = RedefinicaoSenha.builder()
                .usuario(usuario)
                .token(token)
                .criadoEm(now())
                .build();

        usuario.setSolicitacao(entity);
        redefinicaoSenhaRepository.save(entity);
    }

    public void removerSolicitacaoAnterior(Usuario usuario) {
        RedefinicaoSenha solicitacao = usuario.getSolicitacao();
        if(nonNull(solicitacao)) {
            redefinicaoSenhaRepository.delete(solicitacao);
            usuario.setSolicitacao(null);
        }
    }
}
