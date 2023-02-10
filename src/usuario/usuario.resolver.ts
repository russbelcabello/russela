import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Resolver('Usuario')
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Mutation('createUsuario')
  create(@Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput) {
    return this.usuarioService.create(createUsuarioInput);
  }

  @Query('usuario')
  findAll() {
    return this.usuarioService.findAll();
  }

  @Query('usuario')
  findOne(@Args('id') id: number) {
    return this.usuarioService.findOne(id);
  }

  @Mutation('updateUsuario')
  update(@Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput) {
    return this.usuarioService.update(updateUsuarioInput.id, updateUsuarioInput);
  }

  @Mutation('removeUsuario')
  remove(@Args('id') id: number) {
    return this.usuarioService.remove(id);
  }
}
