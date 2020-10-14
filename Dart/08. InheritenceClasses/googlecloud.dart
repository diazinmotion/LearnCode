import 'cloudprovider.dart';
import 'features/billing.dart';
import 'features/compute.dart';
import 'features/storage.dart';

class GoogleCloud extends CloudProvider with Storage, Compute implements Billing {

    var _defaultZone     = null;
    var _defaultRegion   = null;

    @override
    num availableCredits = 0;

    GoogleCloud({String region, String zone, num credits}) : super('GCP', 'Google', true, true){
        this._defaultRegion     = region;
        this._defaultZone       = zone;
        this.availableCredits   = credits;
    }

    // setter & getter
    set zone(String zone) {
        _defaultZone = zone;
    }

    String get zone {
        return _defaultZone;
    }

    set region(String region) => _defaultRegion = region;

    String get region => _defaultRegion;

    void showRegionZone(){
        print('Current Zone: $_defaultZone ($_defaultRegion)');
    }

    @override
    void showCredit() {
        print('Your current credits USD $availableCredits');
    }
}