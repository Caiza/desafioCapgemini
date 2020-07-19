package br.com.estudo.form;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

import br.com.estudo.model.Cliente;
import br.com.estudo.model.Status;
import br.com.estudo.repository.ClienteRepository;

public class AtualizacaoClienteForm {
	
	private String nome;
//	@JsonDeserialize(using = LocalDateDeserializer.class)
//	@JsonSerialize(using = DateSerializer.class)
//	@JsonFormat(pattern = "dd/MM/yyyy")
//	private LocalDate dataNascimento;
	private long telefone;
	@Enumerated(EnumType.STRING)
	private Status status;
	@NotNull 
	private String senha;
	
	
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
//	public LocalDate getDataNascimento() {
//		return dataNascimento;
//	}
//	public void setDataNascimento(LocalDate dataNascimento) {
//		this.dataNascimento = dataNascimento;
//	}
	public long getTelefone() {
		return telefone;
	}
	public void setTelefone(long telefone) {
		this.telefone = telefone;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	
	public Cliente atualizar(Long cpf, ClienteRepository clienteRepository) {
		Cliente cliente = clienteRepository.findByCpf(cpf);
		cliente.setTelefone(this.telefone);
		cliente.setStatus(this.status);
	//	cliente.setDataNascimento(this.dataNascimento);
		cliente.setSenha(this.senha);
		cliente.setNome(this.nome);
		clienteRepository.save(cliente);
		return cliente;
	}

}
