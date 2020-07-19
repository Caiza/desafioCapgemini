package br.com.estudo.model;

public class Banco {
	
	public void depositar(Conta conta, double valor) {
		conta.deposita(valor);
	}
	
	public void sacar(Conta conta, double valor)  {
		if(conta.getSaldo() >= valor) {
			conta.saca(valor);
		}
		new  Exception("Saldo insuficiente");
	}
	
	public void realizarTransferencia(Conta enviada, double valor, Conta recebida) {
		if(enviada.getSaldo() >= valor) {
			enviada.saca(valor);
			recebida.deposita(valor);
		}
		new  Exception("Saldo insuficiente");
	}
}
