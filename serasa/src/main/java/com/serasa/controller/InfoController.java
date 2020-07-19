package com.serasa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.serasa.model.StatusUsuario;
import com.serasa.service.InfoService;

@RestController
@RequestMapping("/info")
public class InfoController {
	
	@Autowired
	private InfoService infoService;
	
	@RequestMapping("/{cpf}")
	public StatusUsuario getInfoUsuario(@PathVariable long cpf) {
		return infoService.getInfoUsuario(cpf);
	
	}

}
