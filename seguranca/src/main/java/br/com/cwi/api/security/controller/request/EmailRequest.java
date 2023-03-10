package br.com.cwi.api.security.controller.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class EmailRequest {

    @NotBlank
    private String email;

}
