package br.com.estudo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.estudo.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

	Cliente findByCpf(long cpf);
	
	Optional<Cliente> findByNome(String nome);
	
	
	
}
