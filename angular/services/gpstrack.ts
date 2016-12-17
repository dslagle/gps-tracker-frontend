import { Vehicle } from "../model/vehicle";

export class SegmentInfo {
    static Empty: SegmentInfo = {
        OriginDateTime: undefined,
        Origin: { Latitude: 0, Longitude: 0 },
        Destination: { Latitude: 0, Longitude: 0 },
        DestinationStopName: "",
        DestinationETA: undefined,
    };

    OriginDateTime: Date;
    Origin: GPS;
    Destination: GPS;
    DestinationStopName: string;
    DestinationETA: Date;

    RMInfo?: RMSegmentInfo;
    GoogleInfo?: GoogleSegmentInfo;
}

export class GoogleSegmentInfo {
    TravelTimeInSeconds: number;
    DistanceInFeet: number;
    DestinationETA: Date;
}

export class RMSegmentInfo {
    TravelTimeInSeconds: number;
}

export class VehicleSegmentsViewModel {
    vehicle: Vehicle;
    segments: SegmentInfo[];
    timer: NodeJS.Timer;
}

export class GPS {
    Latitude: number;
    Longitude: number;
}