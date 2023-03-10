package br.com.cwi.api.security.controller;

import br.com.cwi.api.security.controller.request.EmailRequest;
import br.com.cwi.api.security.controller.request.RedefinirSenhaRequest;
import br.com.cwi.api.security.service.RedefinirSenhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/redefinir")
public class RedefinicaoSenhaController {

    @Autowired
    private RedefinirSenhaService redefinirSenhaService;



    @PostMapping
    public void solicitar(@Valid @RequestBody EmailRequest request) {
        redefinirSenhaService.solicitar(request);
    }

    @PutMapping
    public void redefinir(@Valid @RequestBody RedefinirSenhaRequest request){
        redefinirSenhaService.redefinir(request);
    }

}
