from kalkulator import Kalkulator

class KalkulatorKali(Kalkulator):
    
    def kali_angka(self, num1, num2):
        self.nilai = num1 * num2

        return self.nilai

    def tambah_angka(self, num1, num2):
        self.nilai = num1 + num2
        
        return self.nilai