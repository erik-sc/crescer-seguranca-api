package br.com.cwi.api.security.mapper;

import br.com.cwi.api.security.controller.response.UsuarioResumidoResponse;
import br.com.cwi.api.security.domain.Usuario;

public class UsuarioResumidoMapper {
    public static UsuarioResumidoResponse toResponse(Usuario usuario) {
        return UsuarioResumidoResponse.builder()
                .id(usuario.getId())
                .nomeCompleto(usuario.getNome())
                .email(usuario.getEmail())
                .build();
    }
}
