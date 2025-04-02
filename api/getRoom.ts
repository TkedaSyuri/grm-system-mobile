

export const getData = async (floorNumber: string) => {
    try {
      const response = await fetch(
       `${process.env.EXPO_PUBLIC_APP_VERSION}/api/room/get/floor/${floorNumber}`
      );
  
      if (!response.ok) {
        throw new Error("データの取得に失敗しました");
      }
  
      return await response.json();
    } catch (error) {
      console.error("API エラー:", error);
      throw error;
    }
  };
  
  
