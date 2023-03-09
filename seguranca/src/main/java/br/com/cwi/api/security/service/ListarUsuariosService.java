package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.response.UsuarioResumidoResponse;
import br.com.cwi.api.security.mapper.UsuarioResumidoMapper;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarUsuariosService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    public Page<UsuarioResumidoResponse> listar(String filtro, Pageable pageable) {

        return usuarioRepository
                .findByNomeContainingIgnoreCaseOrEmailContainingIgnoreCase(filtro, filtro, pageable)
                .map(UsuarioResumidoMapper::toResponse);
    }
}
