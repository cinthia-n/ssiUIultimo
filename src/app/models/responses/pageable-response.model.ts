export class PageableResponseModel<T extends Object> {
  current_page: number;
  first_page_url: number;
  from: number;
  last_page: number;
  last_page_url: number;
  next_page_url: number;
  path: string;
  per_page: number;
  prev_page_url: number;
  to: number;
  total: number;
  data: Array<T>;
}
