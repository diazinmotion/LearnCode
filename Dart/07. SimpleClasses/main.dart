import 'clouds.dart';

void main(List<String> args) {
    var cloud = new Clouds('GCP', 'Google', 100);
    cloud.createBucket('testing-bucket', 1000);
    cloud.storeFileToBucket('sample_file.docx', 2.6);
    cloud.storeFileToBucket('sample_file_2.mp4', 15.8);
    cloud.storeFileToBucket('sample_file_3.exe', 124.09);
    cloud.listAllFiles();
    cloud.checkCredits();
}