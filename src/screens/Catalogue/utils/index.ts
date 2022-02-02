export interface CatalogueOption {
  id: number;
  title: string;
  cost: number;
  description?: string;
  imageUrl?: string;
}

export const catalogueOptions: CatalogueOption[] = [
  {
    id: 1,
    title: '10% Discount on Next Bill',
    cost: 500,
    imageUrl:
      'https://www.nicepng.com/png/detail/396-3966505_10-percent-off-png-download-image-10-percent.png',
  },
  {
    id: 2,
    title: 'Rent a Movie for Free',
    cost: 2500,
    imageUrl:
      'https://blog.prepscholar.com/hs-fs/hubfs/main_free.jpg?width=320&name=main_free.jpg',
  },
  {
    id: 3,
    title: 'Extra 10 Hours for Recordings',
    cost: 10000,
    imageUrl:
      'https://freedesignfile.com/upload/2018/07/Woman-holding-TV-remote-control-console-Stock-Photo.jpg',
  },
  {
    id: 4,
    title: '5€ Voucher for Uber Eats',
    cost: 100,
    imageUrl:
      'https://play-lh.googleusercontent.com/7pjpdPmplr6xCkHbpYbBXghaUhAhavbAzC44qszaugrYK5PpnZ7Wk2HDFGS5nC5MGw',
  },
];
