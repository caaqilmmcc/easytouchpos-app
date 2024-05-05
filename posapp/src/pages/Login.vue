<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Login to your FrappeUI App!</CardTitle>
      </CardHeader>
      <CardContent>
        <form class="flex flex-col space-y-2 w-full" @submit.prevent="submit">
          <Input
            required
            name="email"
            type="text"
            placeholder="johndoe@email.com"
            label="User ID"
          />
          <Input
            required
            name="password"
            type="password"
            placeholder="••••••"
            label="Password"
          />
          <Button :loading="session.login.loading" 
            >Login</Button
          >
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { session } from '@/data/session'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
function submit(e) {
  let formData = new FormData(e.target)
  session.login.submit({
    email: formData.get('email'),
    password: formData.get('password'),
  })
}
</script>
