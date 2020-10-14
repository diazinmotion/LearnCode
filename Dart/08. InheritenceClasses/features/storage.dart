// this class is for interface class purposes
import 'dart:math';

mixin Storage {    
    
    void createBucket([String uniqueName]) {
        Random r = new Random();
        var bucketName = (uniqueName)?? 'bucket-${r.nextInt(100)}';

        print('Bucket $bucketName has been created');
    }
}