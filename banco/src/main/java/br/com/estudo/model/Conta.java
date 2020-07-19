package br.com.estudo.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Conta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long agencia;
	private Long conta;
	LocalDateTime dataCracao;
	@Enumerated(EnumType.STRING)
	private TipoConta tipoConta;
	@OneToOne
	private Cliente cliente;

	private double saldo;
	
	private Long credito;

	public double saca(double valor) {
		return saldo = saldo - valor;
	}

	public double deposita(double valor) {
		return saldo = saldo + valor;
	}

	public Long getAgencia() {
		return agencia;
	}

	public void setAgencia(Long agencia) {
		Long ran = (long) (Math.random() * 9999l);
		this.agencia = ran;
	}

	public Long getConta() {
		return conta;
	}

	public void setConta(Long conta) {
		Long ran = (long) (Math.random() * 9999l);
		this.conta = ran;
	}

	public LocalDateTime getDataCracao() {
		return dataCracao;
	}

	public void setDataCracao(LocalDateTime dataCracao) {
		this.dataCracao = dataCracao;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public TipoConta getTipoConta() {
		return tipoConta;
	}

	public void setTipoConta(TipoConta tipoConta) {
		this.tipoConta = tipoConta;
	}

	
	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return super.equals(obj);
	}



	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public long getCredito() {
		return credito;
	}

	public void setCredito(Long credito) {
		this.credito = credito;
	}
	

}
