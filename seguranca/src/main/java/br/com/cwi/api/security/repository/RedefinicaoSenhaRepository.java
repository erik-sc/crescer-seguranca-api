package br.com.cwi.api.security.repository;

import br.com.cwi.api.security.domain.RedefinicaoSenha;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RedefinicaoSenhaRepository extends JpaRepository<RedefinicaoSenha, Long> {

    RedefinicaoSenha findByToken(String token);
}
