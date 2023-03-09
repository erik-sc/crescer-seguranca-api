package br.com.cwi.api.security.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter @Setter
public class UsuarioRequest {

    @NotBlank
    private String nome;

    @NotNull @Email
    private String email;

    @NotBlank
    private String senha;

    @NotNull @NotEmpty
    private List<String> permissoes;

}
