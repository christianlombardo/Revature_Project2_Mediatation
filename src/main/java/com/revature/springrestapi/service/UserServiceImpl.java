package com.revature.springrestapi.service;

import com.revature.springrestapi.entity.Meditation;
import com.revature.springrestapi.entity.User;
import com.revature.springrestapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Override
    public List<User> getAllUser() {
        return repository.findAll();
    }

    @Override
    public User getUserById(Long id) {
//        return repository.existsById(id);
        return repository.getUserById(id);
//        return repository.getById(id);
    }

    @Override
    public User saveUser(User user) {
        return repository.save(user);
    }

    @Override
    public User updateUser(Long id, User updateUser) {
        User userdb = repository.getById(id);
//        return repository.getById(id);
        userdb.setId(id);
        userdb.setName(updateUser.getName());
        userdb.setEmail(updateUser.getEmail());
        userdb.setPassword(updateUser.getPassword());
       // userdb.setMeditation(updateUser.getMeditation());
        return repository.save(userdb);  //  Calling save() on an object with predefined id will update the corresponding database record rather than insert a new one.
    }

    @Override
    public User userLogin(User user) {
        return repository.userLogin(user.getEmail(), user.getPassword());
    }

    @Override
    public void userRegister(User user) {
        //repository.userRegister(20, user.getEmail(), false, 0, "", user.getMeditationInterests(), user.getName(), user.getPassword());
        repository.save(user);
        // userRegister(String email, boolean favorite, String meditationTime, String meditationName, String meditationInterests, String name, String password);
    }

    @Override
    public void deleteUser(Long id) {

    }
}
