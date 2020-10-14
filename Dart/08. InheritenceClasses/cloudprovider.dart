abstract class CloudProvider {

    var _vendorName      = null;
    var _productName     = null;
    var _isMultiZone     = false;
    var _isMultiRegion   = false;

    CloudProvider(this._productName, this._vendorName, this._isMultiRegion, this._isMultiZone);

    void providerInfromation(){
        print('You are using ${this._productName} by ${this._vendorName}');
        print('Multi Region Support: ${(this._isMultiRegion) ? 'Yes':'No'}');
        print('Multi Zoning Support: ${(this._isMultiZone) ? 'Yes':'No'}');
    }
}