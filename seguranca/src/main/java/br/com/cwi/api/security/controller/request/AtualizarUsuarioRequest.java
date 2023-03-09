package br.com.cwi.api.security.controller.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AtualizarUsuarioRequest {

    private String nome;

    private LocalDate dataNascimento;

    private String email;

}
