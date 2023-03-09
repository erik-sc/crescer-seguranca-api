package br.com.cwi.api.security.service;

import br.com.cwi.api.security.UsuarioSecurity;
import br.com.cwi.api.security.repository.UsuarioRepository;
import br.com.cwi.api.security.domain.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@Service
public class UsuarioAutenticadoService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Long getId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UsuarioSecurity usuarioSecurity = (UsuarioSecurity) authentication.getPrincipal();
        return usuarioSecurity.getId();
    }

    public Usuario get() {
        return usuarioRepository.findById(getId())
                .orElseThrow(() -> new ResponseStatusException(INTERNAL_SERVER_ERROR, "Usuário não existe ou não está autenticado"));
    }
}
