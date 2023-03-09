package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.request.AtualizarUsuarioRequest;
import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.mapper.UsuarioMapper;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static java.util.Objects.nonNull;

@Service
public class AtualizarUsuarioService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioResponse atualizar(AtualizarUsuarioRequest request) {

        Usuario usuario = usuarioAutenticadoService.get();

        usuario.setNome(nonNull(request.getNome()) ? request.getNome() : usuario.getNome());
        usuario.setEmail(nonNull(request.getEmail()) ? request.getEmail() : usuario.getEmail());

        usuarioRepository.save(usuario);

        return UsuarioMapper.toResponse(usuario);
    }
}
