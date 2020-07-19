package com.serasa.DTO;

import com.serasa.model.StatusUsuario;

public class UsuarioDTO {
	
	private long id;
	private String nome;
	private long cpf;
	private StatusUsuario status;
	
		
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public long getCpf() {
		return cpf;
	}
	public void setCpf(long cpf) {
		this.cpf = cpf;
	}
	public StatusUsuario getStatus() {
		return status;
	}
	public void setStatus(StatusUsuario status) {
		this.status = status;
	}
	
	
}
