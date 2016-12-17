"use strict";
var SegmentInfo = (function () {
    function SegmentInfo() {
    }
    SegmentInfo.Empty = {
        OriginDateTime: undefined,
        Origin: { Latitude: 0, Longitude: 0 },
        Destination: { Latitude: 0, Longitude: 0 },
        DestinationStopName: "",
        DestinationETA: undefined,
    };
    return SegmentInfo;
}());
exports.SegmentInfo = SegmentInfo;
var GoogleSegmentInfo = (function () {
    function GoogleSegmentInfo() {
    }
    return GoogleSegmentInfo;
}());
exports.GoogleSegmentInfo = GoogleSegmentInfo;
var RMSegmentInfo = (function () {
    function RMSegmentInfo() {
    }
    return RMSegmentInfo;
}());
exports.RMSegmentInfo = RMSegmentInfo;
var VehicleSegmentsViewModel = (function () {
    function VehicleSegmentsViewModel() {
    }
    return VehicleSegmentsViewModel;
}());
exports.VehicleSegmentsViewModel = VehicleSegmentsViewModel;
var GPS = (function () {
    function GPS() {
    }
    return GPS;
}());
exports.GPS = GPS;
//# sourceMappingURL=gpstrack.js.map