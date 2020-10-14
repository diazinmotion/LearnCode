import 'cloudprovider.dart';
import 'features/billing.dart';

class AwsCloud extends CloudProvider implements Billing {

    var _defaultZone     = null;
    var _defaultRegion   = null;
    @override
    num availableCredits = 0;

    AwsCloud(this.availableCredits, {String region, String zone}) : super('AWS', 'Amazon', true, true){
        this._defaultRegion  = region;
        this._defaultZone    = zone;
    }

    set region(String name) => _defaultRegion = name;
    get region => _defaultRegion;
    set zone(String name) => _defaultZone = name;
    get zone => _defaultZone;

    void showRegionZone(){
        print('Current Zone: $_defaultZone ($_defaultRegion)');
    }

    @override
    void showCredit() {
        print('Your current credits USD $availableCredits');
    }
}