type Barber = {
  id: string;
  name: string;
  location: string;
  description: string;
  images: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

export default Barber;
