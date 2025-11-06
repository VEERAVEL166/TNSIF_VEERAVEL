package admin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin getAdminById(Long id) {
        return adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with id: " + id));
    }

    public Admin updateAdmin(Long id, Admin updatedAdmin) {
        Admin existing = getAdminById(id);
        existing.setName(updatedAdmin.getName());
        existing.setEmail(updatedAdmin.getEmail());
        existing.setPhoneNumber(updatedAdmin.getPhoneNumber());
        return adminRepository.save(existing);
    }

    public void deleteAdmin(Long id) {
        Admin existing = getAdminById(id);
        adminRepository.delete(existing);
    }
}
