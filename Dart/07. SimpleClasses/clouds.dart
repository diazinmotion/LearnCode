// we'll demonstrate how to create and use class


import 'dart:math';

class Clouds {

    // simple attributes
    String name             = null;
    String manufacture      = null;

    // storage related
    String bucketName           = null;
    num bucketSize              = 0;
    num availableCredits        = 0;
    Map<String, num> fileList   = {};

    // constructor with simple params
    Clouds(this.name, this.manufacture, this.availableCredits){
        if(this.availableCredits <= 0){
            throw 'Insuffient Credits.';
        }
    }

    // simple method
    void createBucket(String uniqueName, num size){
        Random r = new Random();

        double cost     = 0;
        var bucketName  = '$uniqueName-${r.nextInt(100).toString()}';

        this.bucketName = bucketName;
        this.bucketSize = size;

        if(size > 0 && size <= 100){
            cost = 0.5;
        }else if(size > 100 && size <= 250){
            cost = 1.3;
        }else if(size > 250){
            cost = 2.0;
        }else{
            cost = 0.0;
        }

        print('${this.name} has created new bucket called $bucketName ($size MB)');
        this.availableCredits -= cost;
    }
    
    void checkCredits(){
        print('Your current credits: USD ${availableCredits}');
    }

    void storeFileToBucket(String fileName, num fileSize){
        // bucket isn't created just yet
        if(this.bucketName == null){
            throw 'No bucket created yet. Please make one';
        }else{
            print('Saving $fileName to ${this.bucketName} ($fileSize MB)');
            this.bucketSize -= fileSize;
            fileList.addAll({fileName:fileSize});
        }
    }

    void listAllFiles(){
        print('Your current files:');
        this.fileList.forEach((key, value){ 
            print('$key ($value MB)');
        });
        print('\nAvailable storage (MB): ${this.bucketSize}');
    }
}