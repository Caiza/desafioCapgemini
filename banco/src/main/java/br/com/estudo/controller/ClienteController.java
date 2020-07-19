package br.com.estudo.controller;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.estudo.model.Cliente;
import br.com.estudo.repository.ClienteRepository;
import br.com.estudo.service.BancoService;

@CrossOrigin(origins = "http://localhost:4200/user/conta")
@RestController
@RequestMapping(path = "cliente", produces = MediaType.APPLICATION_JSON_VALUE)
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private BancoService bancoService;

	@GetMapping("/{cpf}")
	public Cliente cliente(@PathVariable long cpf) {
		return bancoService.getClientePorCpf(cpf);
	}

	@DeleteMapping("/{cpf}")
	@Transactional
	public void excluirCliente(@PathVariable long cpf) {
		Cliente cliente = bancoService.getClientePorCpf(cpf);
		clienteRepository.delete(cliente);
	}

//	@GetMapping("/listarClientes")
//	//@RequestMapping(value = "/listarClientes", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	private @ResponseBody ResponseEntity<List<ClienteDTO>> listarClientes() {
//		List<Cliente> clientes = bancoService.listarClientes();
//		List<ClienteDTO> listaCliente = ClienteDTO.converter(clientes);
//		return new ResponseEntity<List<ClienteDTO>> (listaCliente, HttpStatus.ACCEPTED);
//	}

//	@GetMapping("/listarClientes")
//	private @ResponseBody ResponseEntity<List<Cliente>> listarClientes() {
//		List<Cliente> clientes = new ArrayList<Cliente>();
//		clientes = bancoService.listarClientes();
//		return new ResponseEntity<List<Cliente>> (clientes, HttpStatus.ACCEPTED);
//	}
	
	@Autowired
	private ClienteRepository clientRepository;
	
	@GetMapping("/listaCliente")
	public List<Cliente> buscarContas() {
		return bancoService.listarClientes();
	}


	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	@Transactional
	private void atualizaCliente(@Valid @RequestBody Cliente cliente) {
		Cliente clienteOld = clienteRepository.findByCpf(cliente.getCpf());
		if (!(clienteOld.getConta().getCredito() != cliente.getConta().getCredito()) && !bancoService.getInfoClient(cliente.getCpf())) {
			System.out.println("Nao eh possivel aumentar o credito!");
		}
		clienteRepository.save(cliente);
	}

//	@PutMapping("/{cpf}")
//	@Transactional
//	private Cliente atualizaCreditoCliente(@PathVariable("cpf") long cpf, @RequestBody long credito) {
//		Cliente cliente = bancoService.getClientePorCpf(cpf);
//		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//		if (bancoService.getInfoClient(cpf)) {
//			cliente.getConta().setCredito(credito);
//			clienteRepository.save(cliente);
//		}
//		return cliente;
//	}

	@PostMapping
	@Transactional
	public void cadastrar(@RequestBody @Valid Cliente cliente) {
		if (bancoService.getInfoClient(cliente.getCpf())) {
			clienteRepository.save(cliente);
		}

	}

}
