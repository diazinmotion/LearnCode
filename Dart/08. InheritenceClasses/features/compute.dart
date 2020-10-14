// this class is for interface class purposes
import 'dart:math';

mixin Compute {    
    
    void createVM([String uniqueName]) {
        Random r = new Random();
        var vmName = (uniqueName)?? 'compute-${r.nextInt(100)}';

        print('VM $vmName has been created');
    }
}