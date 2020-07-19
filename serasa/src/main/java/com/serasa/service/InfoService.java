package com.serasa.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serasa.model.StatusUsuario;
import com.serasa.model.Usuario;
import com.serasa.repository.UsuarioRepository;

@Service
public class InfoService {
	
	StatusUsuario status;
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	public StatusUsuario getInfoUsuario(long cpf) {
		Optional<Usuario> usu = usuarioRepository.findByCpf(cpf);
		if(usu.isPresent()) {
			status = usu.get().getStatus();
			return status;
		}
		System.out.println("Nao existe esse usurio cadastrado!");
		return StatusUsuario.INEXISTENTE;
	}
	
	

}
