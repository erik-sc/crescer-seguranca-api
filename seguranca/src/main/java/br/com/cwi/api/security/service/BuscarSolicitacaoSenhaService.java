package br.com.cwi.api.security.service;

import br.com.cwi.api.security.domain.RedefinicaoSenha;
import br.com.cwi.api.security.repository.RedefinicaoSenhaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static java.util.Objects.isNull;

@Service
public class BuscarSolicitacaoSenhaService {

    @Autowired
    private RedefinicaoSenhaRepository redefinicaoSenhaRepository;

    public RedefinicaoSenha porToken(String token) {
        RedefinicaoSenha redefinicaoSenha = redefinicaoSenhaRepository.findByToken(token);
        if(isNull(redefinicaoSenha)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Token inválido");
        }
        return redefinicaoSenha;
    }

}
