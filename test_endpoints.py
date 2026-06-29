import requests
import json
import os

NODE_URL = "http://127.0.0.1:5000/api/v1"
FASTAPI_URL = "http://127.0.0.1:8000/api"

def print_status(point, success, message=""):
    status = "[PASSED]" if success else "[FAILED]"
    print(f"{status} | {point} {message}")

def test_all():
    print("Starting integration tests...\n")
    
    # 1. Test Node Login & Protected Route (also tests MongoDB implicitly)
    # Register first
    creds = {"username": "testuser", "email": "test@test.com", "password": "password123"}
    try:
        reg_res = requests.post(f"{NODE_URL}/auth/register", json=creds)
        
        login_res = requests.post(f"{NODE_URL}/auth/login", json=creds)
        if login_res.status_code == 200 and "token" in login_res.json():
            token = login_res.json()["token"]
            print_status("Node Login", True)
            print_status("MongoDB Connection (Node)", True)
            
            # Test Protected Route
            headers = {"Authorization": f"Bearer {token}"}
            prof_res = requests.get(f"{NODE_URL}/auth/profile", headers=headers)
            if prof_res.status_code == 200:
                print_status("Protected Route", True)
            else:
                print_status("Protected Route", False, f"- Status: {prof_res.status_code}")
                
            # Test Node -> FastAPI -> Ollama AI Chat
            print("Testing AI Chat (Node -> FastAPI -> Ollama)... This may take a few seconds.")
            chat_res = requests.post("http://127.0.0.1:5000/api/ai/chat", json={"message": "Hello AI"}, headers=headers)
            if chat_res.status_code == 200:
                print_status("Node -> FastAPI", True)
                print_status("Ollama AI chat", True)
                
                # Test Chat History (Was the chat saved?)
                hist_res = requests.get(f"{NODE_URL}/chat-history", headers=headers)
                if hist_res.status_code == 200 and len(hist_res.json().get('data', [])) > 0:
                    print_status("Chat History", True)
                else:
                    print_status("Chat History", False, "- Not saved or endpoint failed")
            else:
                print_status("Node -> FastAPI", False, f"- Status {chat_res.status_code}")
                print_status("Ollama AI chat", False)
                
        else:
            print_status("Node Login", False, f"- Could not get token: {login_res.text}")
    except Exception as e:
        print_status("Node.js endpoints", False, f"- Error connecting to Node app: {e}")

if __name__ == "__main__":
    test_all()
