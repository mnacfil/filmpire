export type Parent = {
  children: React.ReactNode;
};

export type AuthRequestToken = {
  success: boolean;
  expires_at: string;
  request_token: string;
};

export type AuthSession = {
  success: boolean;
  session_id: string;
};
