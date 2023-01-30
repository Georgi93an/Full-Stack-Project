package com.ProfileManagement.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ProfileManagement.entity.Type;
import com.ProfileManagement.repository.TypeRepository;

@RestController
@RequestMapping("/typeuser")
@CrossOrigin("*")
public class TypeController {

	@Autowired
	private TypeRepository typeRepository;
	
	@GetMapping("/getTypes")
	public Iterable<Type>getTypes(){
		return typeRepository.findAll();

	}
	
	@GetMapping("/getType/{id}")
	public Type getType(@PathVariable Long id){
		Optional<Type>typeFound=typeRepository.findById(id);
		
		if(typeFound.isPresent()) {
			return typeFound.get();
		}else {
			return null;
		}
	}
	
	@PostMapping("/createType")
	public Type createType(@RequestBody Type type){
		return typeRepository.save(type);

	}
	
	@PutMapping("/updateType/{id}")
	public Type updateType(@PathVariable Long id, @RequestBody Type type){
		Optional<Type>typeFound=typeRepository.findById(id);
		if(typeFound.isPresent()) {
			Type toUpdate=typeFound.get();
			toUpdate.setType(type.getType());
			return typeRepository.save(toUpdate);
		}else {
			return null;
		}
	}
	
	@DeleteMapping("/deleteType/{id}")
	public void deleteType(@PathVariable long id){
			typeRepository.deleteById(id);
	}
}
