import { DeviceSize } from "@/types/DeviceSize";

export default function getDeviceSize(width: number) {
  if (width < 768) {
    return DeviceSize.Mobile;
  } else if (width >= 768 && width <= 1024) {
    return DeviceSize.Tablet;
  }
  return DeviceSize.Desktop;
}