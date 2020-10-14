import 'awscloud.dart';
import 'googlecloud.dart';

main(List<String> args) {
    var gcp = new GoogleCloud(region: 'Jakarta, Indonesia', zone: 'asia-southeast2-a', credits: 100);
    gcp.providerInfromation();
    gcp.showRegionZone();

    // change region & zone
    gcp.region = 'Los Angeles, North America';
    gcp.zone = 'us-west2-a';
    gcp.showRegionZone();
    gcp.showCredit();

    // we can call mixin too this is act as interface class or traits in PHP
    gcp.createBucket();
    gcp.createVM();

    // other class here
    print('------------------');
    var aws = new AwsCloud(20, region: 'Oregon, West US', zone: 'us-west-2');
    aws.providerInfromation();
    aws.showRegionZone();
    aws.showCredit();
}