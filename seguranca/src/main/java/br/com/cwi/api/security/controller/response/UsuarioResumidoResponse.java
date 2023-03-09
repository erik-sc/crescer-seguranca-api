package br.com.cwi.api.security.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioResumidoResponse {

    private Long id;

    private String nomeCompleto;

    private String email;

    private String apelido;

    private String imagemPerfil;
}
