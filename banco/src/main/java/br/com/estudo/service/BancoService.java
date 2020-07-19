package br.com.estudo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.estudo.client.SerasaClient;
import br.com.estudo.dto.InfoClienteSerasaDTO;
import br.com.estudo.model.Cliente;
import br.com.estudo.model.Status;
import br.com.estudo.repository.ClienteRepository;

@Service
public class BancoService {

	@Autowired
	private SerasaClient serasaClient;

	@Autowired
	private ClienteRepository clienteRepository;

	InfoClienteSerasaDTO info;
	
	public boolean getInfoClient(long cpf) {
		Status info = serasaClient.getInfoUsuario(cpf);

		System.out.println(info);
		if (Status.NEGATIVO.equals(info)) {
			return true;
		}
		return false;

	}
	

	public Cliente getClientePorCpf(Long cpf) {
		Cliente cliente = clienteRepository.findByCpf(cpf);
		return cliente;
	}

	public void salvar(Cliente cliente) {
		clienteRepository.save(cliente);
	}
	
	public List<Cliente> listarClientes() {
		return  clienteRepository.findAll();
	}

}
