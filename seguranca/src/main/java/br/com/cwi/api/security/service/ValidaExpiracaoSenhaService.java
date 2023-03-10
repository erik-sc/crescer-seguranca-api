package br.com.cwi.api.security.service;

import br.com.cwi.api.security.domain.RedefinicaoSenha;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

import static br.com.cwi.api.security.domain.RedefinicaoSenha.MINUTOS_EXPIRACAO;

@Service
public class ValidaExpiracaoSenhaService {

    public void validar(RedefinicaoSenha redefinicaoSenha) {
        LocalDateTime criadoEm = redefinicaoSenha.getCriadoEm();
        long diferencaEmMinutos = ChronoUnit.MINUTES.between(criadoEm, LocalDateTime.now());

        if(diferencaEmMinutos > MINUTOS_EXPIRACAO) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Token expirado");
        }
    }
}
