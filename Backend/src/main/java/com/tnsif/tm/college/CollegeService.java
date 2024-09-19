package com.tnsif.tm.college;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class CollegeService {

    @Autowired
    private CollegeRepository repo;

    public List<College> listAll() {
        return repo.findAll();
    }

    public College get(Long id) {
        return repo.findById(id)
                   .orElseThrow(() -> new NoSuchElementException("College not found with ID: " + id));
    }


    
    public void save(College college)
	{
		repo.save(college);
	}
	public void delete(Long id)
	{
		repo.deleteById(id);
	}
}
