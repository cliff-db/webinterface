export enum DataType {
    Byte = 1,
    Kilobyte = 2,
    Megabyte = 3,
    Gigabyte = 4,
    Terrabyte = 5,
    Petabyte = 6,
    Exabyte = 7,
    Zottabyte = 8,
    Yottabyte = 9
}

export function getSuffix(type: DataType) {
    switch(type){
        case DataType.Byte:
            return "B";
        case DataType.Kilobyte:
            return "kB";
        case DataType.Megabyte:
            return "MB";
        case DataType.Gigabyte:
            return "GB";
        case DataType.Terrabyte:
            return "TB";
        case DataType.Petabyte:
            return "PB";
        case DataType.Exabyte:
            return "EB";
        case DataType.Zottabyte:
            return "ZB";
        case DataType.Yottabyte:
            return "YB";
    }
}

export function convert(val: number, from: DataType, to: DataType): number {
    const baseMultiplier = 1024;
    let offset = to - from;
    let multiplier = Math.pow(baseMultiplier, offset);
    if(offset > 0) {
        return val * multiplier;
    } else if(offset < 0) {
        let divider = Math.pow(baseMultiplier, -offset);
        return val / divider;
    } else {
        return val;
    }
}