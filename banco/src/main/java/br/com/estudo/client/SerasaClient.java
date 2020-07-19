package br.com.estudo.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.estudo.model.Status;

@FeignClient("serasa")
public interface SerasaClient {
	
	@RequestMapping("/info/{cpf}")
	Status getInfoUsuario(@PathVariable long cpf);
	

}
