package br.com.cwi.api.security.controller.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class RedefinirSenhaRequest {

    @NotBlank
    private String token;

    @NotBlank
    private String senhaNova;

    @NotBlank
    private String confirmaSenhaNova;
}
