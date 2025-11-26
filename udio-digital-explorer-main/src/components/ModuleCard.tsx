import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export const ModuleCard = ({ title, description, icon, href }: ModuleCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50">
      <CardHeader>
        <div className="mb-4 text-primary">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="ghost" className="w-full group-hover:bg-secondary">
          <Link to={href} className="flex items-center justify-between">
            Explorar módulo
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
