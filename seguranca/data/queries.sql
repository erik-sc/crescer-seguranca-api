select u.id, u.email, u.ativo, p.nome
  from usuario u 
       inner join permissao p on u.id = p.usuario_id;
