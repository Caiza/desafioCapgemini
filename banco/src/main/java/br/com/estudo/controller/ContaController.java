package br.com.estudo.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.estudo.model.Cliente;
import br.com.estudo.model.Conta;
import br.com.estudo.repository.ContaRepository;
import br.com.estudo.service.BancoService;

@RestController
//(path = "conta")
@RequestMapping(path = "conta")
public class ContaController {

	@Autowired
	private ContaRepository contaRepository;

	@Autowired
	private BancoService bancoService;

	@RequestMapping("/buscarContaPorNome")
	public Conta buscarContaPorCliente(String nomeCliente) {
		Conta conta = contaRepository.buscarConta(nomeCliente);
		return conta;
	}

	@RequestMapping("/listaConta")
	public List<Conta> buscarContas() {
		return contaRepository.findAll();
	}

	@PutMapping
	@Transactional
	private void atualizaConta(@Valid @RequestBody Conta conta) {
		Optional<Conta> contaOld = contaRepository.findById(conta.getId());
		if ((contaOld.get().getCredito() != conta.getCredito())) {
			if (!bancoService.getInfoClient(conta.getCliente().getCpf())) {
				System.out.println("Nao eh possivel aumentar o credito!");
			}
		}

		contaRepository.save(conta);
	}

}
