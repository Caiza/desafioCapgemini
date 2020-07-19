package com.serasa.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.DateSerializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;

import io.micrometer.core.lang.NonNull;

@Entity
public class Usuario {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NonNull @Size(min = 11, max = 11)
	private Long cpf;
	@NonNull @Size(min = 10, max = 50)	
	private String nome;
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@JsonSerialize(using = DateSerializer.class)
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataCriacao;
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@JsonSerialize(using = DateSerializer.class)
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataAteracao;
	@NotNull @Enumerated(EnumType.STRING)
	private StatusUsuario status;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getCpf() {
		return cpf;
	}
	public void setCpf(Long cpf) {
		this.cpf = cpf;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public LocalDate getDataCriacao() {
		return dataCriacao;
	}
	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
	public LocalDate getDataAteracao() {
		return dataAteracao;
	}
	public void setDataAteracao(LocalDate dataAteracao) {
		this.dataAteracao = dataAteracao;
	}
	public StatusUsuario getStatus() {
		return status;
	}
	public void setStatus(StatusUsuario status) {
		this.status = status;
	}
	
	

}
