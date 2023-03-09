package br.com.cwi.api.security;

import br.com.cwi.api.security.domain.Usuario;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.stream.Collectors;

public class UsuarioSecurity implements UserDetails {

    private static final String PREFIXO_PERMISSAO_SPRING = "ROLE_";

    private Long id;
    private String email;
    private String senha;
    private boolean ativo;
    private List<SimpleGrantedAuthority> permissoes;

    public UsuarioSecurity(Usuario usuario) {
        this.id = usuario.getId();
        this.email = usuario.getEmail();
        this.senha = usuario.getSenha();
        this.ativo = usuario.isAtivo();
        this.permissoes = convertePermissoes(usuario);
    }

    private List<SimpleGrantedAuthority> convertePermissoes(Usuario usuario) {
        return usuario.getPermissoes().stream()
                .map(permissao -> new SimpleGrantedAuthority(PREFIXO_PERMISSAO_SPRING + permissao.getNome()))
                .collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    @Override
    public List<SimpleGrantedAuthority> getAuthorities() {
        return this.permissoes;
    }

    @Override
    public String getPassword() {
        return this.senha;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.ativo;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.ativo;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.ativo;
    }

    @Override
    public boolean isEnabled() {
        return this.ativo;
    }
}
